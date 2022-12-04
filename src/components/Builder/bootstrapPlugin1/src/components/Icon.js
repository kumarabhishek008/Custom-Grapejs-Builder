import imageIcon from 'raw-loader!../icons/image-solid.svg';
import ListIcon from '../icons/iconsList.json';

export const IconBlock = (bm, label) => {
  bm.add('svg-icon', {
    label: `${imageIcon}<div>${label}</div>`,
    category: 'Media',
    attributes: { class: 'fa fa-text' },
    content: {
      type: 'icon',
      
    },
  });
};

export default domComponent => {
  const iconType = domComponent.getType('svg');
  const model = iconType.model;
  const view = iconType.view;
  const type = 'bs-icon';

  domComponent.addType(type, {
    model: model.extend(
      {
        defaults: Object.assign({}, model.prototype.defaults, {
          'custom-name': 'svg-icon',
          tagName: 'i',
          resizable: 1,
          attributes: {
            'aria-hidden': true,
          },
          classes: ['fa','fa-diamond'],
          traits: [
          ].concat(model.prototype.defaults.traits),
        }),
      },
      {
        isComponent: function(el) {
          if (el && el.tagName === 'i') {
            return { type: type };
          }
        },
      },
    ),
    view: view,
  });
};