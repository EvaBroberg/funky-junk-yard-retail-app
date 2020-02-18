import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Electronics/gaming',
                    imageUrl: 'https://images.unsplash.com/photo-1556537570-231ead2a4009?ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80',
                    id: 1
                },
                {
                    title: 'Home deco',
                    imageUrl: 'https://images.unsplash.com/photo-1568639837178-c794256b9b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    id: 2
                },
                {
                    title: 'Apparel',
                    imageUrl: 'https://images.unsplash.com/photo-1504659913281-61817e6e2e9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
                    id: 3
                },
                {
                    title: 'Adults',
                    imageUrl: 'https://images.unsplash.com/photo-1558493625-4de5c096ab21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Children',
                    imageUrl: 'https://images.unsplash.com/photo-1484725008675-4f26e4824ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 5
                }]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        < MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;