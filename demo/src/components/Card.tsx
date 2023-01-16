const Card = () => {
    return (
        <div className="mx-auto flex flex-col items-center mt-12">
            <div className="card">
                <img
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                />
                <h1 className="card-header">
                    Living Room Sofa
                </h1>
                <div className="card-body flex flex-col space-y-4">
                    <p>
                        This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
                    </p>
                    <h1 className="text-2xl text-blue-600 dark:text-blue-300">
                        $450
                    </h1>
                </div>
                <hr className="divider my-4" />
                <div className="card-footer">
                    <button className="btn btn-blue">
                        Buy Now
                    </button>
                    <button className="btn btn-ghost btn-blue">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card