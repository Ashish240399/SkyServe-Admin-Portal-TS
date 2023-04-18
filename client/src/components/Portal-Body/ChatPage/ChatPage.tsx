import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


type RequestProps = {
  method: string,
  headers?: object,
  redirect:string
}
function ChatPage() {
  const router = useRouter();
  const [allModels, setAllModels] = useState<Array<any> | null>(null);
  const chatToBeShownById:(string[]|string|undefined)=router.query.modelId

  //fetching all models
  function getAllModels():void {
    var myHeaders = new Headers();
    myHeaders.append("Session-Token", "moHCo92LzvpCgdxCpkJikFJBxAn1g188");

    // var requestOptions:RequestProps = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    fetch("https://portal.skyserve.ai/v1/model/listModels", {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        // dispatch(getAllModels(result));
        setAllModels(result);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getAllModels();
  }, [])
  console.log(chatToBeShownById)

  return (
    <div>
      {allModels?.map((model) => (
        <div onClick={() => router.push({
          pathname: "",
          query:{...router.query,modelId:model.model_id}
        })} key={model.model_id}>
          {model.model_id}
        </div>
      ))}
      <div style={{color:"red"}}>{allModels?.filter((model)=>model.model_id==chatToBeShownById).map((el)=>el.model_id)}</div>
    </div>
  )
}

export default ChatPage