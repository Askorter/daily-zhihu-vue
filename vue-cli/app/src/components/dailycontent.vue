<template>
    <div class="content">
        <Card class="cardcontent" :title="cardtitle">
            <p>{{cardcontent}}</p>
        </Card>
        <Card class="cardcontent" :title="cardtitle">
            <p>{{cardcontent}}</p>
        </Card>
        <Card class="cardcontent" :title="cardtitle">
            <p>{{cardcontent}}</p>
        </Card>
        <Card class="cardcontent" :title="cardtitle">
            <p>{{cardcontent}}</p>
        </Card>
        <Card class="cardcontent" >
            <p>{{cardcontent}}</p>
        </Card>
    </div> 
</template>
<script>
    export default {
        name: "dailycontent",
        data() {
            return {
                cardcontent: "绝地求生的地图没有高清的，找了个刺激战场的。我们从这几个因素考虑：1、 自身因素【 学区房、 市中心、 交通因素、 医院； 以及建筑本身属性， 例如别墅与小区】2、 人口【 需求也决定价格， 人口密集， 城市大价格高】4、 经济因素5、 社会因素【 治安等】 "
            }
        }
    }
</script>
<style>
    .content {
        margin: auto;
        width: 60%;
    }
    
    .cardcontent {
        margin-top: 20px;
    }
</style>