//calcular desconto
class Promotion {
  constructor(product, price, discount) {
    this.product = product;
    this.price = price;
    this.discount = discount;
    this.showDisc();
  }

  showDisc() {
    const discount =
      this.price - ((this.price * this.discount) / 100).toFixed(2);
    console.log(
      `O produto ${this.product} custa R$ ${this.price} com desconto de ${this.discount}% custando agora: R$ ${discount}`
    );
  }
}

module.exports = Promotion;
