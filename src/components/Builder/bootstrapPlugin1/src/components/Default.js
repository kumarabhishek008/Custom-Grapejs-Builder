import _s from "underscore.string";
import contexts from '../bootstrap-contexts';

export default (domc) => {
    const contexts_w_white = contexts.concat(['white']);
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('default', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                tagName: 'div',
                // for General Settings
                stylable: ['font-family', 'font-size', 'color', 'background-color','border-color','border-style','border-width',],
                // for Advance Settings
                'stylable-require': [
                    "font-weight",
                    "letter-spacing",
                    "line-height",
                    "text-transform",
                    "text-align",
                    "text-decoration",
                    "font-style",
                    "text-shadow",
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
                        label: 'ID',
                        name: 'id',
                        placeholder: 'my_element'
                    },
                    {
                        type: 'text',
                        label: 'Title',
                        name: 'title',
                        placeholder: 'My Element'
                    }
                ] //.concat(defaultModel.prototype.defaults.traits)
            }),
            init() {
                const classes = this.get('classes');
                classes.bind('add', this.classesChanged.bind(this));
                classes.bind('change', this.classesChanged.bind(this));
                classes.bind('remove', this.classesChanged.bind(this));
                this.init2();
            },
            /* BS comps use init2, not init */
            init2() {},
            /* method where we can check if we should changeType */
            classesChanged() {},
            /* replace the comp with a copy of a different type */
            changeType(new_type) {
                const coll = this.collection;
                const at = coll.indexOf(this);
                const button_opts = {
                    type: new_type,
                    style: this.getStyle(),
                    attributes: this.getAttributes(),
                    content: this.view.el.innerHTML
                }
                coll.remove(this);
                coll.add(button_opts, { at });
                this.destroy();
            }
        }),
        view: defaultView
    });
}
