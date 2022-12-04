import windowIcon from "raw-loader!../icons/window-maximize-solid.svg";

export const RowBlock = (bm, label) => {
    bm.add('row').set({
        label: `${windowIcon}<div>${label}</div>`,
        category: 'Layout',
        content: {
            type: 'row',
            classes: ['grp-row']
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('row', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Row',
                tagName: 'div',
                draggable: true,
                droppable: true,
                stylable: ['font-family', 'font-size', 'color', 'background-color'],
                traits: [

                ].concat(defaultModel.prototype.defaults.traits)
            })
        }, {
            isComponent(el) {
                if(el && el.classList && el.classList.contains('grp-row')) {
                    return {type: 'row'};
                }
            }
        }),
        view: defaultView
    });
}
