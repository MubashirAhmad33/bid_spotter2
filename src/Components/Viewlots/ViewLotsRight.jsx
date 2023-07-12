import ViewLotsRightCards from "./ViewLotsRightCards";

function ViewLotsRight() {
  return (
    <div className="col-7 mt-6 mb-3">
         {/* <!-- ----------------Sort Div 1----------------- --> */}
                    <div className="sort_div_1 d-flex">
                        <p className="me-2">Sort by</p>
                        <div className="col-md-4">
                            <select id="inputState" className="form-select sort_selected_form_select">
                                <option selected>Auction Date</option>
                                <option value="1">Week 1</option>
                                <option value="2">Week 2</option>
                                <option value="3">Week 3</option>
                            </select>
                        </div>

                        <div className="anchor_div_1 d-flex">
                            <div className="anchor_anchor_div_1">
                                <a href="#">List</a>
                                <i className="fa fa-list" aria-hidden="true"></i>
                            </div>
                            <div className="anchor_anchor_div_1">
                                <a href="#">Grid</a>
                                <i className="fa fa-th" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    {/* <!-- ----------------Pagination Div 2----------------- --> */}
                    <div className="div_2 d-flex mt-4">

                        <p>Lots Per Page</p>

                        <div className="pagnination_div_2">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end pagination_ul">
                                    <li className="page-item disabled">
                                        <button className="pagination_btn"><i className="fa fa-angle-left"
                                                aria-hidden="true"></i></button>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                    <li className="page-item"><a className="page-link" href="#">.</a></li>
                                    <li className="page-item"><a className="page-link" href="#">.</a></li>
                                    <li className="page-item"><a className="page-link" href="#">.</a></li>
                                    <li className="page-item"><a className="page-link" href="#">67</a></li>
                                    <li className="page-item">
                                        <button className="pagination_btn"><i className="fa fa-angle-right"
                                                aria-hidden="true"></i></button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <ViewLotsRightCards/>
</div>
  );
}

export default ViewLotsRight;
