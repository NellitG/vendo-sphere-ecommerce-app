import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function Site_Carousel() {

    const title = 'Committed to Creating Value!'
    const subtitle = 'Tomorrows Foundation Today: Crafting Quality Concrete With Precision And Passion.'

  return (
    <Carousel transition={{ duration: .5 }} className="h-[100dvh]  w-full">
      <div className="relative h-full w-full">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/11/18/30/concrete-pump-2222450_1280.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end  md:items-center   place-items-center bg-black/60">
          <div className="w-3/4 pb-16 md:pb-0 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl lg:text-5xl fade-in"
            >
             {title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-md md:text-lg lg:text-xl opacity-80 fade-in-left"
            >
             {subtitle}
            </Typography>
            <div className="flex justify-center  gap-2">
              <Button size="lg" color="white">
                Read more
              </Button>
              <Button size="lg" color="white" variant="text">
                
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end md:items-center bg-black/10">
          <div className="w-4/5 pl-16 pb-12 md:pb-0 md:w-2/4 md:pl-20  lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl lg:text-5xl fade-in"
            >
              {title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 md:mb-12 text-md md:text-lg lg:text-xl opacity-80 fade-in-left"
            >
             {subtitle}
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://media.istockphoto.com/id/1146059870/photo/concrete-paving-slab.jpg?s=612x612&w=0&k=20&c=52n-OyDx6fU5XuXHR-0DcugnsFSHHSeLTdNJyI-LmFA="
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/60">
          <div className="w-4/5 pl-14 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl lg:text-5xl fade-in"
            >
             {title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 text-md md:text-lg lg:text-xl opacity-80 fade-in-left"
            >
            {subtitle}
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
              Read more
              </Button>
              <Button size="lg" color="white" variant="text">   
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}