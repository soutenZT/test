var app = new Vue({
    el: "#app",
    data: {
        books: [{
                id: 1,
                name: "<算法导论>",
                data: "2019-08",
                price: 87.00,
                count: 1
            },
            {
                id: 2,
                name: "<编程艺术>",
                data: "2019-07",
                price: 67.00,
                count: 1
            },
            {
                id: 3,
                name: "<编程珠玑>",
                data: "2019-7",
                price: 87.00,
                count: 1
            },
        ]
    },
    methods: {
        getFixedPrice(price) {
            return "$" + price.toFixed(2);
        },
        decrement(index) {
            //改变对象某个属性是响应式的
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        removeHandel(index) {
            this.books.splice(index, 1);
        }
    },
    filters: {
        showFixedPrice(price) {
            return "$" + price.toFixed(2); //toFixed  保留几位小数
        }
    }
})