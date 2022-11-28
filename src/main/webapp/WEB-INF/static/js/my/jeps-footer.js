Vue.component('jeps-footer', {
    props: ["mail","home"],
    template: `
        <div class="row navbar-default navbar-fixed-bottom text-center text-primary">
            <div class="label-default navbar-inner">
                <slot></slot>
                Mail = <a style="text-decoration: underline;" class="text-primary" v-bind:href="mailstr">{{mail}}</a>,
                Home = <a style="text-decoration: underline;" class="text-primary" v-bind:href="home">{{home}}</a>
            </div>
        </div>
    `,
    data: function(){
        return {
            mailstr: 'mailto:'+this.mail
        };
    }    
});
