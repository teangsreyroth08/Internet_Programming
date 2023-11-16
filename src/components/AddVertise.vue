<template>
    <div class="container" :style="{backgroundColor: bgColor}">
        <div class="container1">
            <div class="heading">
                {{ heanding }}
            </div>
            <div class="_btn">
                <MyButton  :text="textBtn" :Bgcolor="colorBtn"/>
            </div>
        </div>
        <div class="image">
            <img :src=Img alt="">
        </div>

    </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default{
    name: 'AddVertise',
    props: {
        heanding: {
            type: String,
            default: 'New Collection',
        },
        bgColor: {
            type: String,
            default: '#3BB77E',
        },
        textBtn: {
            type: String,
            default: 'Show Now',
        },
        colorBtn: {
            type: String,
            default: '#3d3d3d',
        },
        Img: {
            type: String,
            default: 'https://picsum.photos/200/300', 
        },
    },
    components: {
        MyButton,
    },
}

</script>

<style scoped>

.container {
    width: 455px;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px ;
}
.container1 {
    width: 200px;
    height: 100px;
    margin-left: 50px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.heading {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    color: #000;
}
._btn {
    margin-top: 50px;
}
.image {
    width: 260px;
    height: 250px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
}

img {
    width: 100%;
    height: 100%;
}

</style>