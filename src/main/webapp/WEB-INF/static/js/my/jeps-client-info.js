Vue.component('jeps-client-info', {
    props: ["zaglavie"],
    template: `
        <div class="panel panel-primary">
            <!--<div class="panel-title">Pwd = </div>-->
            <div style="font-weight: bold" class="panel-heading panel-title text-center h4 text-capitalize">
                {{zaglavie}}
            </div>
            <div class="panel-body">
                <!--
                {{' role = '+JSON.stringify(ClientDesc.role)+', - '+ClientDesc.role[0].authority}}<br>
                {{' all = '+JSON.stringify(ClientDesc)}}
                -->
                <div v-for="(value, key, index) in ClientDesc">
                    {{ index }}) {{ key }} = {{ value }}
                </div>    
            </div>
            <!--<div class="panel-footer">Client Info </div>-->
        </div> 
    `,
    data: function () {
        return {
            ClientDesc: {}
        };
    },
    methods: {
        getClientDesc: function () {
            axios.get('/rest/clientdesc')
                    .then(response => {
                        this.ClientDesc = response.data;
                    })
                    .catch(error => {
                        //this.restdata.errors = push(error);
                    });
        }
    },
    created: function () {
        this.getClientDesc();
    }
});
