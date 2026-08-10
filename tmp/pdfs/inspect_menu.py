from pathlib import Path
import fitz
from PIL import Image, ImageDraw

pdf = next(Path('.').glob('*_Menu.pdf'))
out = Path('tmp/pdfs/menu_render')
out.mkdir(parents=True, exist_ok=True)
doc = fitz.open(pdf)
print(f'FILE={pdf.name}\nPAGES={len(doc)}\nMETADATA={doc.metadata}')

thumbs = []
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    path = out / f'page-{i+1:02}.png'
    pix.save(path)
    text = page.get_text('text')
    (out / f'page-{i+1:02}.txt').write_text(text, encoding='utf-8')
    print(f'PAGE {i+1}: {page.rect.width:.1f}x{page.rect.height:.1f} pt; text={len(text)}; images={len(page.get_images(full=True))}')
    image = Image.open(path).convert('RGB')
    image.thumbnail((360, 510))
    thumbs.append(image.copy())

cols, cell_w, cell_h = 4, 380, 550
rows = (len(thumbs) + cols - 1) // cols
sheet = Image.new('RGB', (cols * cell_w, rows * cell_h), 'white')
draw = ImageDraw.Draw(sheet)
for i, im in enumerate(thumbs):
    x = (i % cols) * cell_w + (cell_w - im.width) // 2
    y = (i // cols) * cell_h + 25
    sheet.paste(im, (x, y))
    draw.text((i % cols * cell_w + 10, i // cols * cell_h + 5), f'Page {i+1}', fill='black')
sheet.save(out / 'contact-sheet.jpg', quality=90)
