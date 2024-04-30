import Form from "antd/es/form/Form";

import FormItem from "antd/es/form/FormItem";
import { Col, Row, Select, Input, DatePicker, Button, Radio } from "antd";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Title_EN, Title_TH } from "../../shared/const";

const FormPersonDetail = () => {
  const { t, i18n } = useTranslation();

  const options = useMemo(() => {
    if (i18n.language === "en") {
      return Title_EN;
    }
    return Title_TH;
  }, [i18n.language]);

  return (
    <Form className="w-full mb-4">
      <Row gutter={[8, 16]}>
        <Col span={4}>
          <FormItem label={t("form.title")}>
            <Select
              allowClear
              placeholder={t("form.title")}
              options={options}
            ></Select>
          </FormItem>
        </Col>
        <Col span={10}>
          <FormItem label={t("form.name")}>
            <Input />
          </FormItem>
        </Col>
        <Col span={10}>
          <FormItem label={t("form.surname")}>
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={[8, 16]}>
        <Col span={4}>
          <FormItem label={t("form.dob")}>
            <DatePicker
              className="w-full"
              allowClear
              placeholder={t("form.dobPlaceholder")}
              format={"MM/DD/YYYY"}
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span={10}>
          <FormItem label={t("form.national")}>
            <Select placeholder={t("form.nationalPlaceholder")} />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <FormItem label={t("form.citizenId")}>
            <div className="d-flex items-center gap-5">
              <FormItem className="mb-0">
                <Input style={{ maxWidth: "100px" }} />
              </FormItem>
              <span>-</span>
              <FormItem className="mb-0">
                <Input />
              </FormItem>
              <span>-</span>
              <FormItem className="mb-0">
                <Input />
              </FormItem>
              <span>-</span>
              <FormItem className="mb-0">
                <Input style={{ maxWidth: "140px" }} />
              </FormItem>
              <span>-</span>
              <FormItem className="mb-0">
                <Input style={{ maxWidth: "100px" }} />
              </FormItem>
            </div>
          </FormItem>
        </Col>
      </Row>
      <Row gutter={[8, 16]}>
        <Col span={10}>
          <FormItem label={t("form.gender")}>
            <Radio.Group>
              <Radio value="male">{t("form.male")}</Radio>
              <Radio value="female">{t("form.female")}</Radio>
              <Radio value="not_specific">{t("form.notSpecific")}</Radio>
            </Radio.Group>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <FormItem label={t("form.phone")}>
            <div className="d-flex items-center gap-5">
              <FormItem className="mb-0">
                <Select className="w-full" style={{ width: "120px" }} />
              </FormItem>
              <span>-</span>
              <FormItem className="mb-0">
                <Input />
              </FormItem>
            </div>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <FormItem label={t("form.passport")}>
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={16} className="d-flex items-end justify-between gap-5">
          <FormItem className="mb-0" label={t("form.salary")}>
            <Input className="w-full" style={{ maxWidth: "510px" }} />
          </FormItem>
          <div className="d-flex items-center gap-7">
            <Button style={{ width: "90px" }}>{t("clear")}</Button>
            <FormItem className="mb-0">
              <Button htmlType="submit" style={{ width: "90px" }}>
                {t("submit")}
              </Button>
            </FormItem>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default FormPersonDetail;
