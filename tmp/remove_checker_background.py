from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "assets" / "images" / "menu"

SOURCES = {
    "1.png": "set-ocean-cutout.png",
    "4.png": "crispy-duck-cutout.png",
    "7.png": "beef-pho-cutout.png",
    "9.png": "special-bento-cutout.png",
    "10.png": "chicken-bento-cutout.png",
    "12.png": "beef-stir-fry-cutout.png",
}


def connected_checker_mask(rgb: np.ndarray) -> np.ndarray:
    """Return only pale, neutral checker pixels connected to the canvas edge."""
    rgb16 = rgb.astype(np.int16)
    channel_spread = rgb16.max(axis=2) - rgb16.min(axis=2)
    luminance = rgb16.mean(axis=2)
    checker_candidate = ((luminance >= 226) & (channel_spread <= 18)).astype(np.uint8)

    _, labels = cv2.connectedComponents(checker_candidate, connectivity=8)
    edge_labels = np.unique(
        np.concatenate((labels[0], labels[-1], labels[:, 0], labels[:, -1]))
    )
    edge_labels = edge_labels[edge_labels != 0]
    return np.isin(labels, edge_labels).astype(np.uint8) * 255


def make_cutout(source_name: str, output_name: str) -> None:
    source = ROOT / source_name
    image = Image.open(source).convert("RGB")
    rgb = np.asarray(image)

    background = Image.fromarray(connected_checker_mask(rgb), mode="L")
    # Move the matte a fraction inward, then soften one pixel for a clean edge.
    background = background.filter(ImageFilter.MaxFilter(3))
    background = background.filter(ImageFilter.GaussianBlur(0.55))
    alpha = Image.eval(background, lambda value: 255 - value)

    rgba = image.convert("RGBA")
    rgba.putalpha(alpha)

    bbox = alpha.getbbox()
    if bbox:
        left, top, right, bottom = bbox
        padding = 12
        bbox = (
            max(0, left - padding),
            max(0, top - padding),
            min(rgba.width, right + padding),
            min(rgba.height, bottom + padding),
        )
        rgba = rgba.crop(bbox)

    output = OUTPUT_DIR / output_name
    rgba.save(output, format="PNG", optimize=True)
    print(f"{source.name} -> {output.relative_to(ROOT)} ({rgba.width}x{rgba.height})")


for source_name, output_name in SOURCES.items():
    make_cutout(source_name, output_name)
