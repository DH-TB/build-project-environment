module.exports={
    entry:'./src/entry.js',
    output:{
        path:__dirname+'/public/dist',
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'file-loader!css-loader'},
            {test: /\.(jpe?g|png|gif|svg)$/i,loader:'img-loader'},
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