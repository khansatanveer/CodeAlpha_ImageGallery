# Image Gallery Project

A responsive, accessible image gallery with filtering and lightbox functionality.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Category Filtering**: Filter images by category (All, Nature, Animals, Cars)
- **Lightbox Viewer**: Click any image to view it in a modal lightbox
- **Keyboard Navigation**: Navigate lightbox with arrow keys and close with Escape
- **Accessibility**: Proper ARIA attributes and keyboard navigation support
- **Smooth Animations**: Hover effects and transitions for enhanced user experience

## Project Structure

```
CodeAlpha_ImageGallery/
├── index.html          # Main HTML structure and content
├── style.css            # CSS styling and responsive design
├── script.js            # JavaScript functionality (filtering, lightbox)
└── images/              # Image assets directory
    ├── nature-img1.jpg  # Nature category images
    ├── nature-img2.jpg
    ├── ...              # Additional nature images
    ├── animals-img1.jpg # Animals category images
    ├── ...              # Additional animals images
    └── car-img1.jpg     # Cars category images
```

## How to Use

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Filter Images**: Click on the filter buttons at the top to show only images from a specific category
3. **View in Lightbox**: Click on any image to open it in the lightbox viewer
4. **Navigate Lightbox**: 
   - Use arrow keys (← →) to navigate between images
   - Press Escape key to close the lightbox
   - Click outside the image or on the × button to close

## Customization

### Adding New Images
1. Add your image files to the `images/` directory
2. Update `index.html` with a new `<img>` element in the appropriate category section:
   ```html
   <img class="gallery-item nature" src="images/your-new-image.jpg" alt="Description of your image">
   ```

### Adding New Categories
1. Add a new filter button in the `.filters` section of `index.html`
2. Add the corresponding CSS class to new images in `index.html`
3. The JavaScript filtering logic will automatically handle the new category

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Responsive Design)
- Vanilla JavaScript (ES6+)
- Google Fonts (Noto Sans Grantha, Noto Serif Oriya)

## Accessibility Features

- Semantic HTML structure
- ARIA attributes (`aria-pressed`, `aria-modal`, `aria-label`)
- Keyboard navigation support (tab, arrow keys, escape)
- Proper contrast ratios for text and interactive elements
- Focus management in lightbox mode

<<<<<<< HEAD

## Live Demo

🔗 https://code-alpha-image-gallery-lemon.vercel.app/


