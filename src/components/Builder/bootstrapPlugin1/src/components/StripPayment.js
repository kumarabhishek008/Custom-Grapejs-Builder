
export const StripBlocks = (bm, label) =>{
    bm.add('strip_payment', {
        label: `
            <div>${label}</div>
        `,
        category: 'StripPayment',
        content: {
            type : 'strip_payment',
            content : `Checkout`
        }
    });
};

export default (domc, config) =>{
    const textType = domc.getType('text');
    const textModel = textType.model;
    const textView = textType.view;

    domc.addType('strip_payment', {
        model: textModel.extend({
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'StripPayment',
                tagName: 'button',
                dragable:true,
                dropable:true,
                classes: ['strip-Payment','btn','gr-button-tertiary'],
                script : scriptData,
                traits: [
                    {
                        type : 'text',
                        label : config.labels.trait_stripKey,
                        name : 'strip-key',
                        placeholder : 'Strip key'
                    },
                    {
                        type : 'text',
                        label : config.labels.trait_productSku,
                        name : 'product-sku',
                        placeholder : 'Product key',
                    },
                    {
                        type : 'link',
                        label : config.labels.trait_successUrl,
                        name : 'success-url',
                        placeholder : 'www.example.com'
                    },
                    {
                        type : 'link',
                        label : config.labels.trait_errorUrl,
                        name : 'error-url',
                        placeholder : 'www.example.com'
                    },
                    // {
                    //     type : 'select',
                    //     label : 'Version',
                    //     name : 'gr-version',
                    //     value : 'legacy',
                    //     options: [
                    //         {value: 'legacy', name: 'legacy'},
                    //         {value: 'extended', name: 'extended'},
                    //     ]
                    // }
                ].concat(textModel.prototype.defaults.traits)
            })
        }, {
            isComponent(el) {
                if(el && el.classList && el.classList.contains('strip-Payment')) {
                    return {type: 'strip_payment'};
                }
            }
        }),
        view: textView
    });
}

const scriptData = function(){
    // Create an instance of the Stripe object with your publishable API key
//<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
//c
//price_1HuKcwBkXqv6sNY42SJ7boIj
var checkoutButton = document.querySelector('.strip-Payment');
checkoutButton.addEventListener('click', function () {
// When the customer clicks on the button, redirect
// them to Checkout.
// 
var stripKey = checkoutButton.getAttribute('strip-key');
var priceId = checkoutButton.getAttribute('product-sku');
var successUrl = checkoutButton.getAttribute('success-url');
var cancelUrl = checkoutButton.getAttribute('error-url');
var version_select = 'extended';
//var version_select = checkoutButton.getAttribute('gr-version');
if(version_select === 'extended'){
var stripe = Stripe(stripKey);
stripe.redirectToCheckout({
lineItems: [{price: priceId, quantity: 1}],
mode: 'payment',
// Do not rely on the redirect to the successUrl for fulfilling
// purchases, customers may not always reach the success_url after
// a successful payment.
// Instead use one of the strategies described in
// https://stripe.com/docs/payments/checkout/fulfill-orders
successUrl: `${successUrl}?id={CHECKOUT_SESSION_ID}`,
cancelUrl: `${cancelUrl}`,
})
.then(function (result) {
  console.log(result)
if (result.error) {
  // If `redirectToCheckout` fails due towi a browser or network
  // error, display the localized error message to your customer.
  console.log(result);
}
});
}
if(version_select === 'legacy'){    
    // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    //alert('hiiii');
    var stripeHandler = StripeCheckout.configure({
    key: stripKey,
    locale: 'en',
    token: function(token) {
        alert(token)
        // var items = []
        // var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        // var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        // for (var i = 0; i < cartRows.length; i++) {
        //     var cartRow = cartRows[i]
        //     var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        //     var quantity = quantityElement.value
        //     var id = cartRow.dataset.itemId
        //     items.push({
        //         id: id,
        //         quantity: quantity
        //     })
        // } 

        // fetch('/purchase', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         stripeTokenId: token.id,
        //         items: items
        //     })
        // }).then(function(res) {
        //     return res.json()
        // }).then(function(data) {
        //     alert(data.message)
        //     var cartItems = document.getElementsByClassName('cart-items')[0]
        //     while (cartItems.hasChildNodes()) {
        //         cartItems.removeChild(cartItems.firstChild)
        //     }
        //     updateCartTotal()
        // }).catch(function(error) {
        //     console.error(error)
        // })
        }
    })
    function purchaseClicked() {
        //alert('dcjbdhvchgd')
        // var priceElement = document.getElementsByClassName('cart-total-price')[0]
        // var price = parseFloat(priceElement.innerText.replace('$', '')) * 100
        stripeHandler.open({
            amount: 100
        })
    }
    purchaseClicked();
    // stripeHandler.open({
    //     amount: 100
    // })
    }
});

}

// custom_head
// customhead.insertAdjacentHTML(
//           'afterbegin',
//           `${initialComponents.custom_head}`,
//         );
// Simmy Bajaj12:17 PM
// custom_head
// Simmy Bajaj12:23 PM
// component:drag:start