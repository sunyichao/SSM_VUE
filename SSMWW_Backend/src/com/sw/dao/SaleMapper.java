package com.sw.dao;

import com.sw.model.Sale;
import com.sw.model.SaleExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SaleMapper {
	
	Integer saleMaxId();
	
	//以上是自己定义的方法
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    long countByExample(SaleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int deleteByExample(SaleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int deleteByPrimaryKey(Integer saleid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int insert(Sale record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int insertSelective(Sale record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    List<Sale> selectByExample(SaleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    Sale selectByPrimaryKey(Integer saleid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int updateByExampleSelective(@Param("record") Sale record, @Param("example") SaleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int updateByExample(@Param("record") Sale record, @Param("example") SaleExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int updateByPrimaryKeySelective(Sale record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale
     *
     * @mbg.generated Sun Sep 02 15:46:59 CST 2018
     */
    int updateByPrimaryKey(Sale record);
}