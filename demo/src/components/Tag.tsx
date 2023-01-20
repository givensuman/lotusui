const Tag = () => {
    return (
        <div className="mx-auto flex flex-col items-center justify-center my-8">
            <h1>Tags</h1>
            <div className="flex space-x-2">
                <span className="tag tag-sm">Hi Mom</span>
                <span className="tag">Hi Mom</span>
                <span className="tag tag-lg">Hi Mom</span>
            </div>
            <h1>Color Variants</h1>
        <div className="flex items-center flex-wrap space-x-2 space-y-2">
          <span className="tag tag-slate">Slate</span>
          <span className="tag tag-gray ">Gray</span>
          <span className="tag tag-zinc ">Zinc</span>
          <span className="tag tag-neutral ">Neutral</span>
          <span className="tag tag-stone ">Stone</span>
          <span className="tag tag-red">Red</span>
          <span className="tag tag-orange ">Orange</span>
          <span className="tag tag-amber ">Amber</span>
          <span className="tag tag-yellow ">Yellow</span>
          <span className="tag tag-lime ">Lime</span>
          <span className="tag tag-green ">Green</span>
          <span className="tag tag-emerald ">Emerald</span>
          <span className="tag tag-teal tag-solid">Teal</span>
          <span className="tag tag-cyan tag-solid">Cyan</span>
          <span className="tag tag-sky tag-solid">Sky</span>
          <span className="tag tag-blue ">Blue</span>
          <span className="tag tag-indigo">Indigo</span>
          <span className="tag tag-violet">Violet</span>
          <span className="tag tag-purple">Purple</span>
          <span className="tag tag-fuchsia tag-outline">Fuchsia</span>
          <span className="tag tag-pink tag-outline">Pink</span>
          <span className="tag tag-rose tag-outline">Rose</span>
        </div>
        </div>
    )
}

export default Tag