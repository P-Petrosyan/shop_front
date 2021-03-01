type productData = {
        // categories: [{…}]
        description: string
        full_description: string
        id: number
        image: string
        name: string
        price: string
}

export type Product = {
        id: number;
        name: string;
        short_description: string;
        full_description: string;
        price: number;
        image: string;
        categories: any;
        // links(): any;

    // constructor(id, name, description = '', price = 0, image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAAASFBMVEX////JysqcnZ3l5uabnJyfoKDc3d3V19f7+/vKy8vT1NSkpaXOz8/z8/Pv7++7vLy/wMDh4eGur6+xsrK3uLioqam9v7+Vlpa4NrI9AAAFWElEQVR4nO2ci5KrKBRFFcE3+O77/386PI0mYDLTuaNYe9VU9e1IMi4PHA5oOkkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4CaWHs8/pb1EORe1j4Gef2d+At2mAVpx9bt+nDNqmaXW/Hj2EbdO0OPvsvg2vjnTTu3Xn/NA2rc8+v+/Cj23TNDv7DL9K8U63vVO2Eu9sow/vrnJ6G1wV3ohLrXJoqw3vbSWb9m0eVaUVrqA+pYppaqp/axtV7vogM70nntx1WDB+SjyF5ZsSCrrQvY9uqzYx3s1V99CtiozrOabkojiqP+6gW+3LJVl83Vm3fqkNw+V0/Lq5r1LK7qo7+FsHfGPXzUPN/b6R6z62o0QuE1Sbi/Kwfdy6lctSYk3GrVsFePeg49Z1A3e3fHC5y9edo9ZtbXCfFktuPHvCG7Wu9XpZCdv+7FkyRq1r9mJeB6kd0p596Jh17U0vzxi1Y/q1N8es25oDnooxeCRmXXPu3gnHxP118MasazKVdz/WDN5b6vrWtyaJvY7qmHUPOvMdo2sLZt92e+gtMetWoYTkrF4vRMy6abCaCNUfcesOgSO2l3tus0StW5ve/BxFt3Lw1B9R67pna/ZTr3uAzDdDxa1rw7vbelw3Jn3bkXHrPjbm7G56Va+3NL03SCPX3TwqxkWWiceWs/9ef+y6VeB5i9J/rz923TUN7wk9Gxq9rvcBBBG6LXYD3bR4CjA/aHrOuf8HDm54Vpvd9FLvr99aV9IWQyZkbj5yvZHuh0D3okD3zrqhG/L/iuDt4Mvx5nsWnxHRI69feCgynuBKst/GN/Acx1UpZR3xC6J6WB0AAAAAAAAAAIiboevMjiHvu96uyUU7j/PTVpNsp5/1FF3Xu5smrXuvJJu7ze2yMu/GqXePsuedYz57/6qlpNHnKRhlRjdvKCGEst1f/qgpndXPjBLqHrZhhKbueEfpz9pYTOoTCJm4+39Y/pz9FeaaMqI9RMMafXYDY4QsjDCy3SiuCenUz4wwtpio9bKJ0+UNs29Xv4zySNPITx51y5YyC72ALiMqXKvuQsiYcTFLr813wra65jrINzx0C/kydZcnpawpOC8aZjqCjG4nDGd/H7/WV54/dJWP+lkujG72Tne6Omgp3ehO6uXZ/rKsmlS3lLr9/+XzBq2rTtTp5nLI6SM/hLabdhtdHV7VfVddIXu47MEmEakj+l88z/Pr6Ta6HzrdmhovOTTX2CXPumOSVHSjK4XSgtrLI3WbXQZWnZlf42+lKLsfwhbOH7omxaYh3WYkZCgX0oxOt5SvZFxfhUSHWn5SWRdFURcmuqxZFM3Z85C2k4ElvfDobrrgRnfJGZlaeXS9IJkezrN0Vr9Z3T9q5tFpQGVmPQ/RK+h2SSHPp10+je5SqsQkx+faIqVqAq7tNOx0KTFJUEd3VCzX0E1mff77sRvWTXI1bPu1hUziRJhkp/quMGM3y3LbYS6VqpSGmkPZU2buQpl5SXR4s1U3V6WHjB0zU5fKzKZXN2S5pG7SEqfr5l0enHcXKUhp/4h/R8zQlD/0OBjtvCvfM11uItIaOl5rVTUdVlVSN8nVH1iwuqW8UtM8yf/sR6iqKjdVle4fl6qqrIaLrhyYMkyqZqaBmnlxr1nd3AZRXTNdX+qaeWnItmZuNOT8mpmazFTJpdF2RUSCK6LGvdbrhJyMrr5QVeOsk9VELroiGmazjk3Kx3qXy/XuVIXXu+61Wq93y7nrbFsxdz/6M9R6d+zd0M/ny6x3AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwI34B1fHP1mjjpA0AAAAAElFTkSuQmCC')
    // {
    //     this.id = id;
    //     this.name = name;
    //     this.description = description;
    //     this.price = price;
    //     this.image = image;
    // }
}
