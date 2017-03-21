module.exports={
    entry:'./public/js/entry.js',
    output:{
        path:__dirname+'/public/dist',
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};