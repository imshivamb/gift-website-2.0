import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="mt-8 font-bold text-3xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs">
            {`Gifts for ${category.name}`}
          </div>
        </div>
        <Billboard data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="mt-8 font-semibold text-lg  sm:max-w-5xl max-w-xs">
              {category.description}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
