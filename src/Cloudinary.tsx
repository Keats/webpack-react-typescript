import { Cloudinary } from "cloudinary-core";

const Cl = Cloudinary.new({
	cloud_name: "demo",
	secure: true,
});

export default Cl;
