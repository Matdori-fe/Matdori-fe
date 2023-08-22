import NoticeDetail from '../components/NoticeDetail';
const NoticeDetailPage = ({ params }: { params: { noticeIndex: number } }) => {
  return (
    <div className="mx-6">
      <NoticeDetail noticeIndex={params.noticeIndex} />
    </div>
  );
};
export default NoticeDetailPage;
