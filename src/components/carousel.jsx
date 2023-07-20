import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function Site_Carousel() {

    const title = 'Where Shopping Meets the Future!'
    const subtitle = 'Welcome to VendoSphere, your gateway to a revolutionary shopping experience! Step into a world of boundless possibilities, where the latest technology and curated collections converge to bring you the ultimate retail destination.'

  return (
    <Carousel transition={{ duration: .5 }} className="h-[100dvh]  w-full">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"
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
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}