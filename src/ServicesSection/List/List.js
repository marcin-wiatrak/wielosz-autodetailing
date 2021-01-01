import React from 'react';
import styles from './List.module.scss';
import ListElement from './ListElement/ListElement';
import servicesList from '../../data/ServicesList';


class List extends React.Component {

    alerty = (event) => console.log(event.target.innerHTML);

    render() {
        return (
            
            <ul className={styles.wrapper}>
                {servicesList.map(item => (
                    <ListElement 
                        title={item.title}
                        key={item.id}
                        onClick={this.alerty}
                        dataid={item.id}
                    />
                    ))
                }
            </ul>
        )
    }
}


export default List