import { FunctionComponent } from "react"
import { IStage } from "../type"
import Image from'next/image'

const StageCard:FunctionComponent<{stage:IStage}> = ({stage:{Icon, about, title, school, ville, date}}) => {
  const createMarkup = () => {
    return { 
      __html:about
     }
  }

  return (
    <div className="flex p-2 space-x-4">
      <Image src="/images/palmeraie.png" className="mx-auto border" height="128px" width="128px" layout="intrinsic" quality="100" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <h4 className="font-bold">{school}, {ville} ({date})</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default StageCard
