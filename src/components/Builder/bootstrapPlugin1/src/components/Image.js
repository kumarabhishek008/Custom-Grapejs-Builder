import imageIcon from 'raw-loader!../icons/image-solid.svg';

export const ImageBlock = (bm, label) => {
  bm.add('bs-image', {
    label: `${imageIcon}<div>${label}</div>`,
    category: 'Media',
    content: {
      type: 'bs-image',
    },
  });
};

export default domComponent => {
  const img_src_default = 'https://dummyimage.com/800x500/999/222';
  const imageType = domComponent.getType('image');
  const model = imageType.model;
  const view = imageType.view;
  const type = 'bs-image';

  domComponent.addType(type, {
    model: model.extend(
      {
        defaults: Object.assign({}, model.prototype.defaults, {
          'custom-name': 'Image',
          tagName: 'img',
          resizable: 1,
          attributes: {
            src: img_src_default,
          },
          classes: ['img-fluid'],
          stylable: [
            'border-color',
            'border-style',
            'border-width',
            'margin', 
            'margin-top', 
            'margin-right', 
            'margin-bottom', 
            'margin-left', 
            'padding', 
            'padding-top', 
            'padding-right', 
            'padding-bottom', 
            'padding-left',
            'box-shadow',
            'width',
            'height',
          ],
          'stylable-require':[
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius', 
            'border-bottom-left-radius', 
            'border-bottom-right-radius', 
            "width",
            "height",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "opacity",
            "box-shadow",
            'box-shadow-h',
            'box-shadow-v',
            'box-shadow-blur',
            'box-shadow-spread',
            'box-shadow-color',
            'box-shadow-type',
            'transform', 
            'transform-rotate-x', 
            'transform-rotate-y', 
            'transform-rotate-z', 
            'transform-scale-x', 
            'transform-scale-y', 
            'transform-scale-z',
            "perspective",
            'cursor',  
            'overflow', 
            'overflow-x', 
            'overflow-y',
            'transition', 
            'transition-duration', 
            'transition-property', 
            'transition-timing-function', 
            "display",
            'flex-direction', 
            'flex-wrap', 
            'justify-content', 
            'align-items', 
            'align-content', 
            'order', 
            'flex-basis', 
            'flex-grow', 
            'flex-shrink', 
            'align-self',
          ],
          traits: [
            {
              type: 'text',
              label: 'Source (URL)',
              name: 'src',
            },
            {
              type: 'text',
              label: 'Alternate text',
              name: 'alt',
            },
          ].concat(model.prototype.defaults.traits),
        }),
      },
      {
        isComponent: function(el) {
          if (el && el.tagName === 'IMG') {
            return { type: type };
          }
        },
      },
    ),
    view: view,
  });
};
