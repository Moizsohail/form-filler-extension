#!/bin/bash

build() {
    echo 'building react'

    

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    react-scripts build
    
    rm -rf dist/*
    mkdir -p dist
    cp -r build/* dist
    npm run rollup



}

build