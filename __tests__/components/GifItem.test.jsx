import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Testing GifItem', () => { 
    const title = 'Este es el título';
    const url = 'https://th.bing.com/th/id/OIP.lvR5nni7xdPCxU-tC6tzzgHaHa?pid=ImgDet&rs=1';
    const dataObj = {
        title: title,
        url: url
    };

    test('should match the snapshot', () => { 
        const {container} = render( <GifItem {...dataObj} key='key' />);
        expect(container).toMatchSnapshot();
     })
})