import headingIcon from "raw-loader!../icons/heading-solid.svg";

export const HeaderBlock = (bm, label) => {
    bm.add('header', {
        label: `${headingIcon}<div>${label}</div>`,
        category: 'Typography',
        content: {
            type: 'header',
            content: 'Bootstrap heading'
        }
    });
};

export default (domc) => {
    const textType = domc.getType('text');
    const textModel = textType.model;
    const textView = textType.view;

    domc.addType('header', {
        model: textModel.extend({
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'Header',
                tagName: 'h1',
                stylable: true,
                traits: [].concat(textModel.prototype.defaults.traits)
            }),

        }, {
            isComponent(el) {
                if(el && ['H1','H2','H3','H4','H5','H6'].includes(el.tagName)) {
                    return {type: 'header'};
                }
            }
        }),
        view: textView
    });
}
