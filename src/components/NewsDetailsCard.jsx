import { FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    tags,
    total_view,
  } = news;

  return (
    <div className=" mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-[320px] object-cover"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Author + Actions */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">{author?.name}</p>
              <p className="text-xs text-gray-500">
                {new Date(author?.published_date).toDateString()}
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-gray-500 text-lg">
            <FaBookmark className="cursor-pointer hover:text-primary" />
            <FaShareAlt className="cursor-pointer hover:text-primary" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Meta */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaEye />
          <span>{total_view} views</span>
        </div>

        {/* Details */}
        <p className="text-gray-700 leading-relaxed">
          {details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="pt-4">
          <Link to= {`/category/${news.category_id}`} className="btn btn-secondary text-white">
            ← All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
