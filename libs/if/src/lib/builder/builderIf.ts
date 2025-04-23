



const builderIf =<T extends object> ():{
  plugin:ReturnType<typeof builderIf>[0]
}=>{
  const pluginLoad :string[]= ["dww"]
  const ctx = {
    ...pluginLoad
  }
  console.log(ctx);

  return {
    plugin:()=>{
      return builderIf()
    }
  }
}

const x = builderIf().plugin()
