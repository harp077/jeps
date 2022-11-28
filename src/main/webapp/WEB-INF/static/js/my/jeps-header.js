Vue.component('jeps-header', {
  template: `
    <div class="row">
        <div class="bg-primary col-md-12 h3 text-center text-warning">
            <h4 style="color: yellow; font-weight: bold; vertical-align: middle;">
                <img src="img/logo-jeps.png" width="60" height="27" class="img-rounded left"/> 
                    <slot></slot>
                <img src="img/logo-jeps.png" width="60" height="27" class="img-rounded right"/>
            </h4>
        </div>
    </div>
  `
});
