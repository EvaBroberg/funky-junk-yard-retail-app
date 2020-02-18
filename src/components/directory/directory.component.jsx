import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Clothes',
                    imageUrl: 'https://images.unsplash.com/photo-1579027846535-45a372a488b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    id: 1,
                    linkUrl: 'clothes'
                },
                {
                    title: 'Toys',
                    imageUrl: 'https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Beds',
                    imageUrl: 'https://images.unsplash.com/photo-1519405474421-f6a5fae2db20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Dogs',
                    imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Cats',
                    imageUrl: 'https://images.unsplash.com/photo-1536500152107-01ab1422f932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        < MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;