

const ModelPage = async () => {

    const fetchingData = await fetch('https://dummyjson.com/products')
    const data = await fetchingData.json();
    console.log(data)
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="flex justify-center text-2xl font-bold my-5">
                This is model page
            </h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    data.products.map(card => <div key={card.id} className='space-y-5 border border-amber-500 p-10 rounded-2xl'>
                        <div className="flex justify-center">
                            <img src={card.thumbnail} alt={card.brand} />
                        </div>
                        <h1 className="font-bold text-2xl">
                            {card.brand}
                        </h1>
                        <p>
                            {card.description}
                        </p>
                        <p className="font-semibold">
                            Price: ${card.price}
                        </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ModelPage;