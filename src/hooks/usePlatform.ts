import usePlatforms from "./usePlatforms";

const usePlatform=(selectedPlatformId?:number )=>{
    const { data} = usePlatforms();

    return data?.results.find(
        (p) => p.id === selectedPlatformId
      );

}

export default usePlatform;