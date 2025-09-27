import z from "zod";

// ✅ Zod schema
const ProductsSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
});

// ✅ Infer type from schema
type Products = z.infer<typeof ProductsSchema>;

// Fetch single product
async function Products_api(id: number): Promise<Products | undefined> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    // ✅ Validate with Zod
    return ProductsSchema.parse(data);
  } catch (error) {
    console.error(`something went wrong: ${error}`);
  }
}

// Wrapper
async function api(id: number) {
  try {
    const response = await Products_api(id);
    if (response) {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.error(`something went wrong: ${error}`);
  }
}

// ✅ Call
api(5).then((item) => {
  if (item) {
    console.log(item.title);
  }
});
