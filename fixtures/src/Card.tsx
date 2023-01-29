export default function Card() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="card">
                <img
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                />
                <div className="card-body">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-2xl font-bold">Living Room Sofa</h1>
                        <p>This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.</p>
                        <h1 className="text-2xl text-blue-500">$450</h1>
                    </div>
                </div>
                <hr className="divider" />
                <div className="card-footer">
                    <div className="flex mx-auto space-x-2">
                        <button className="btn is-blue">
                            Buy Now
                        </button>
                        <button className="btn is-ghost is-blue">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="card flex flex-row overflow-hidden relative">
                <div className="relative mr-4 h-full">
                <img
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                    className="object-cover absolute left-0 top-0 bottom-0"
                />
                </div>
                <div className="flex flex-col">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">
                        The perfect latte
                    </h1>
                    <p>Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</p>
                </div>
                <div className="card-footer">
                    <button className="btn is-blue">
                        Buy Latte
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}