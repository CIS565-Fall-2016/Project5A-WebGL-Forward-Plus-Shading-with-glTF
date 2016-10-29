#version 100

precision highp float;
precision highp int;

#define TILE_SIZE 16

varying vec3 v_normal;
varying vec2 v_uv;

varying vec3 v_eyePosition;

uniform mat4 u_viewMatrix;

uniform int u_numLights;

// size of screen fb, texture
uniform int u_textureWidth;
uniform int u_textureHeight;

uniform sampler2D u_lightPositionTexture;   //xyz
uniform sampler2D u_lightColorRadiusTexture;    //rgba

uniform sampler2D u_tileLightsTexture;


uniform sampler2D u_diffuse;
uniform sampler2D u_normalMap;


vec3 applyNormalMap(vec3 geomnor, vec3 normap) 
{
    normap = normap * 2.0 - 1.0;
    vec3 up = normalize(vec3(0.001, 1, 0.001));
    vec3 surftan = normalize(cross(geomnor, up));
    vec3 surfbinor = cross(geomnor, surftan);
    return normap.y * surftan + normap.x * surfbinor + normap.z * geomnor;
}

void main() 
{
    // TODO
}