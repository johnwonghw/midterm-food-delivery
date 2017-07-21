$(() => {
  const currentCart = JSON.parse(window.localStorage.getItem('cart'));

  const cart = currentCart || {};

  const helpers = {

    addItems: (id, amount) => {

      cart[id] = {
        amount,
      }

      helpers.addToCart(cart);

    },

    deleteItem: (id) => {

      delete cart[id]

      helpers.addToCart(cart);
    },

    addToCart: function (cart) {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  $('body').on('click', '.add-item', function () {
    let id = $(this).data('id');
    let count = $(this).parent().next().val();
    helpers.addItems(id, count);
    console.log(currentCart);
  });
})