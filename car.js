AFRAME.registerComponent('car',{
    schema:{
        modelRef: { type: "string", default: "../car/scene.gltf" }
    },
    init:function(){
        console.log(this.data.modelRef)
    }


})