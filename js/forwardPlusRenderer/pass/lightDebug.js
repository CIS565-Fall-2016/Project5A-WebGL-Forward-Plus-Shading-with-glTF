var ForwardPlusRenderer = ForwardPlusRenderer || {};
(function() {
    'use strict';

    var FPR = ForwardPlusRenderer;

    var lightPositionBuffer;

    FPR.pass.lightDebug.init = function () {
        var gl = FPR.gl;

        lightPositionBuffer = FPR.pass.lightDebug.lightPositionBuffer = gl.createBuffer();
    };


    FPR.pass.lightDebug.loadShaderProgramCallback = function (prog) {
        var gl = FPR.gl;

        // our current operating pass
        var p = FPR.pass.lightDebug;

        p.program = prog;

        // Retrieve the uniform and attribute locations

        // get uniform and attribute location from shader
        // TODO: uncomment
        // p.u_viewMatrix = gl.getUniformLocation(prog, 'u_viewMatrix');
        // p.u_projectionMatrix = gl.getUniformLocation(prog, 'u_projectionMatrix');
        // p.a_position  = gl.getAttribLocation(prog, 'a_position');

        console.log("Shader Loaded: lightDebug");
    };


    FPR.pass.lightDebug.render = function () {
        var gl = FPR.gl;

        // use light debug program
        // TODO: uncomment
        // gl.useProgram(this.program);

        // assign uniform matrix value
        // TODO: uncomment
        // gl.uniformMatrix4fv(this.u_viewMatrix, false, FPR.camera.matrixWorldInverse.elements);
        // gl.uniformMatrix4fv(this.u_projectionMatrix, false, FPR.camera.projectionMatrix.elements);

        // bind light position buffer as array buffer to draw
        // also copy light position data to the buffer, since it gets updated each frame
        // TODO: uncomment
        // gl.bindBuffer(gl.ARRAY_BUFFER, lightPositionBuffer);
        // gl.bufferData(gl.ARRAY_BUFFER, FPR.light.position, gl.DYNAMIC_DRAW);

        // set vertex attribute pointer
        // TODO: uncomment
        // gl.enableVertexAttribArray(this.a_position);
        // gl.vertexAttribPointer(this.a_position, 3, gl.FLOAT, false, 0, 0);

        // draw lights as POINTS
        // TODO: uncomment
        // gl.drawArrays(gl.POINTS, 0, FPR.NUM_LIGHTS);

        // unbind buffer
        // TODO: uncomment
        // gl.bindBuffer(gl.ARRAY_BUFFER, null);

    };
    
})();