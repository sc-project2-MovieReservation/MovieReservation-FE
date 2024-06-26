import React from "react";

function PolicySectionTable() {
  return (
    <div className="sect-box-descri">
      <table>
        <tbody>
          <tr>
            <td>이용안내</td>
            <td>
              <ul>
                <li>
                  예매 변경은 불가능하며, 취소 후 재 예매를 하셔야만 합니다.
                </li>
                <li>
                  영수증은 상영 시간 전까지 마이페이지에서 출력하실 수 있습니다.
                  단, 신용카드로 예매하신 경우만 한합니다.
                </li>
                <li>
                  상영 시간 이후 관람하신 영화의 영수증 출력을 원하실 경우,
                  1544-1122로 문의 주시기 바랍니다.
                </li>
                <li>
                  취소하신 내역이 나타나지 않거나 궁금하신 사항이 있으시면,
                  고객센터로 문의해 주시기 바랍니다.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>티켓 교환방법</td>
            <td>
              <ul>
                <li>
                  티켓판매기(ATM)에서 발권하실 경우: 예매번호 또는
                  고객인증번호를 입력하시면 티켓을 편하게 발권하실 수 있습니다.
                </li>
                <li>
                  매표소에서 발권하실 경우: 티켓교환권을 출력하여 매표소에
                  방문하시면 티켓으로 교환하실 수 있습니다. (티켓교환권 출력이
                  어려운 경우, 예매번호와 신분증을 지참하시면 매표소에서 티켓을
                  수령하실 수 있습니다.)
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>예매 취소 안내</td>
            <td>
              <ul>
                <li>
                  <p>
                    <strong>신용카드</strong>
                    <br /> 결제 후 3일 이내 취소 시 승인 취소 가능, 3일 이후
                    매입 취소시 영업일 기준 3~5일 소요
                  </p>
                </li>
                <li>
                  <p>
                    <strong>체크카드</strong>
                    <br />
                    결제 후 3일 이내 취소 시 당일 카드사에서 환불처리. 3일 이후
                    매입 취소 시 카드사에 따라 3~10일 이내 카드사에서 환불
                  </p>
                </li>
                <li>
                  <p>
                    <strong>휴대폰 결제</strong>
                    <br />
                    결제 일자 기준 당월(1~말일)취소만 가능. 익월 취소 관련
                    문의는 CGV고객센터(1544-1122) 연락 요망
                    <br />
                    예매취소 후 당일 환불이 원칙이나 현장 취소 시 경우에 따라
                    익일 처리 될 수 있음.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>카카오페이</strong>
                    <br />
                    카카오페이머니나 카카오포인트를 사용하신 경우 각각의
                    잔액으로 원복되며, 카드 결제를 하신 경우는 카드사 정책에
                    따라 승인취소가 진행되며 3일 이후 매입 취소시 영업일 기준
                    3~10일 소요됩니다.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>PAYCO</strong>
                    <br />
                    PAYCO 쿠폰/포인트를 사용하신 경우 각각의 쿠폰/포인트로
                    원복되며 쿠폰의 경우 조건에 따라 재사용이 불가 할 수
                    있습니다. 카드 결제금액은 카드사 정책에 따라 승인취소가
                    진행되며 3일 이후 매입 취소시 영업일 기준 3~10일 소요됩니다.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>스마일페이</strong>
                    <br />
                    스마일캐시를 사용하신 경우 스마일캐시로 원복되며, 카드
                    결제금액은 카드사 정책에 따라 승인취소가 진행되며 3일 이후
                    매입취소 시 영업일 기준 3~10일 소요됩니다.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>NAVER Pay</strong>
                    <br />
                    NAVER Pay 포인트를 사용하신 경우 NAVER Pay 포인트로
                    원복되며, 카드사 결제를 하신 경우는 카드사 정책에 따라
                    승인취소가 진행되며 3일 이후 매입 취소시 영업일 기준 3~10일
                    소요됩니다.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>카카오톡 선물하기 복합상품</strong>
                    <br />
                    카카오톡 선물하기 복합상품 (2인 PKG / 1인 PKG)은 매점쿠폰
                    사용 시, 예매 티켓 환불 불가.
                    <br />※ 단, 매점 쿠폰 미 사용 시, 예매 티켓 환불 가능하며 재
                    예매 시, 새로운 매점 쿠폰 발급.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>계좌이체</strong>
                    <br />
                    1. 예매일 이후 7일 이내 취소 시<br />
                    - 자동 환불 은행: 취소 후 즉시 처리가능
                    <br />
                    - 조흥, 신한, 외한, 한미, 우리, 우체국, 전북, 경남, 광주,
                    대구, 새마을, 제주
                    <br />
                    - 우리은행의 경우 당일 취소분만 즉시 처리 가능
                    <br />
                    - 수동 환불 은행: 농협(취소 후 2~3일 이내 입금),
                    부산/제일/우리(취소 후 3~5일 이내 입금)
                    <br />
                    <br />
                    2. 예매 7일 이후~상영시간 30분 전 취소 시(단, 일부 당일 취소
                    불가 행사의 경우 전일 취소 시)
                    <br />
                    - 환불은 환불 요청일로부터 7일 이상 소요됨
                    <br />
                    <br />※ 기타 환불 관련 문의는 CGV고객센터 1544-1122로
                    연락바랍니다.
                  </p>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>환불 규정 안내</td>
            <td>
              <ul>
                <li>
                  <p>
                    <strong>현장 취소를 하는 경우</strong>
                    <br />
                    상영시간 이전까지만 가능하며, 상영시간 이후 취소나 환불은
                    되지 않습니다.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>홈페이지에서 예매 취소할 경우</strong>
                    <br />
                    부분 취소는 불가능합니다. (ex. 4장을 인터넷으로 예매한 경우
                    4장 모두 취소만 가능)
                    <br />
                    홈페이지 예매 취소는 상영시간 20분전까지 가능합니다.
                    <br />
                    <em>
                      (단, 씨네&amp;포레관, 씨네&amp;리빙룸, SUITE CINEMA 제외)
                    </em>
                    <br />
                    상영시간 이후 취소나 환불은 되지 않습니다
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      모바일 앱/웹(m.cgv.co.kr)에서 예매 취소할 경우
                    </strong>
                    <br />
                    부분 취소는 불가합니다.(ex. 4장을 인터넷으로 예매한 경우 4장
                    모두 취소만 가능)
                    <br />
                    모바일 앱/웹 예매 취소는 상영시간 15분전까지 가능합니다.
                    <br />
                    <em>
                      (단, 씨네&amp;포레관, 씨네&amp;리빙룸, SUITE CINEMA 제외)
                    </em>
                    <br />
                    상영시간 이후 취소나 환불은 되지 않습니다.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      단, 일부 행사의 경우 행사 당일 취소, 변경 불가 합니다.
                    </strong>
                  </p>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PolicySectionTable;
