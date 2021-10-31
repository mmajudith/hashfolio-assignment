import React from 'react'

function CardComponent({id, items}) {
    console.log(items)

  return (
    <div>

        <div>
            <div>
                <img src={`${items.basket_items.coin_logo_url}`} alt="coin logo"/>
            </div>
            <div>
                <p>Basket: {items.name}</p>
                <p>Assets: {`${items.basket_items.coin_name}`}</p>
                <p>Manager: {items.manager_name}</p>
            </div>
            <div>
                {
                    items && items.basket_data && items.basket_data.map((el, id) => (
                        <div key={id}>
                            <p>{el.current_value}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    
    </div>
  )
}

export default CardComponent
