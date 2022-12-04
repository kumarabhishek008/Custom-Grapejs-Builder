/*
known issues:
*/

import _ from 'underscore';
import windowIcon from "raw-loader!../icons/window-maximize-solid.svg";

export const SectionBlock = (bm, c) => {
  bm.add('Section', {
    label: `${windowIcon}<div>${c.labels.section}</div>`,
    category: 'Components',
    content: {
      type: 'section'
    }
  });
}
export default (domc, editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType('section', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'custom-name': 'Section',
        tagName: 'section',
        droppable: true,
        removable: true,
        copyable: true,
        draggable: true,
        stylable: ['font-family', 'font-size', 'color','background-color','background-image','background-size','background-repeat',
        'background-position', 'border-color', 'border-style', 'border-width',
      ],
        classes: ['gr-wrapper', 'gr-py-24'],
        traits: [
          {
            type: 'checkbox',
            label: 'Container',
            name: 'container',
            changeProp: 1
          },
          {
            type: 'class_select',
            options: [
              {value:'' , name:'Center',},
              {value:'' , name: 'Left'},
              {value: '' , option:'Right'}
            ],
            label:'Alignment',
            changeProp: 1,
          }
        ].concat(defaultModel.prototype.defaults.traits),
       }),
      init2() {
        this.listenTo(this, 'change:container', this.container);
        this.set('container', true);
      },
      container() { this.createCardComponent('container'); },
      createCardComponent(prop) {
        const state = this.get(prop);
        let children = this.components();
        let existing = children.filter(function(comp) {
          return comp.attributes.type === prop;
        })[0]; // should only be one of each.

        if(state && !existing) {
          var comp = children.add({
            type: prop
          });
          this.order();
        } else if (!state) {
          existing.destroy();
        }
      },
      order() {

      }
    }, {
      isComponent(el) {
        if(el && el.classList && el.classList.contains('grp-wrapper')) {
          return {type: 'section'};
        }
      }
    }),
    view: defaultView
  });

//   domc.addType('container', {
//     model: defaultModel.extend({
//       defaults: Object.assign({}, defaultModel.prototype.defaults, {
//         'custom-name': 'Container',
//         tagName: 'div',
//         droppable: true,
//         removable: true,
//         copyable: true,
//         draggable: true,
//         stylable: ['font-family', 'font-size', 'color', 'background-color','border-color', 'border-style', 'border-width'],
//         'stylable-require': ['background-image', 'background-size', 'background-repeat', 'background-position', 'opacity' ,'top', 'right', 'bottom' ,'left', 'transition','perspective', 'transform' ],
//         classes: ['gr-container'],
//         traits:[].concat(defaultModel.prototype.defaults.traits),
//         'container': 1
//       })
//     }, {
//       isComponent(el) {
//         if(el && el.classList && el.classList.contains('gr-container')) {
//           return {type: 'container'};
//         }
//       }
//     }),
//     view: defaultView
//   });
}

