import InternalPageLayout from '@/layout/internaPageLayout';
import getData from '@/utils/getData'; // Replace with the actual path

export default function Home() {
  async function fetchSomeData() {
    try {
      const data = await getData('/establishments');
      console.log(data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  }
  return (
    <InternalPageLayout>
      <>
        <button onClick={fetchSomeData}>Clique</button>
      </>
    </InternalPageLayout>
  );
}
