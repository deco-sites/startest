import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


export interface Props {
    /**
     * @title Post image.
     */
    photo?: ImageWidget;
    /**
    * @title Post body.
    */
    post: string;
    /**
    * @title Publish date.
    * @format datetime
    */
    datetime: string;
    /**
    * @title Post title.
    */
    title: string;
 }
 
 export default function LatestPosts({ title, photo }: Props) {
    return (
       <div>
       {photo && <Image
          src={photo}
          alt={`${title} image`}
          height={500}
          width={500}
          class="rounded"
       />}
       <h1 class="font-bold text-primary">{title}</h1>
       <p>This is an example section</p>
       </div>
    );
 }