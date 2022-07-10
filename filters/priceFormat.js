import Vue from "vue";

Vue.filter('priceFormat', function(value) {
    if(value) {
        const v = [...value.toString()];
        const array = [];
        let count = 0;


        v.reverse().forEach((item, index) => {
            array.push(item);
            ++count;
           if(count === 3) {
               count = 0;
               array.push(' ');
           }
        });

        return array.reverse().join('');
    }
});
