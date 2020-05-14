<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableDataShow"
      tooltip-effect="dark"
      border
      style="width: 100%">
        <el-table-column
          label="序号"
          type="index"
          width="50"
          align="center">
        </el-table-column>
        <el-table-column
          prop="feild1"
          label="项目名称"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="feild2"
          label="责任描述"
          width=""
          header-align="center">
        </el-table-column>
    </el-table>
    <el-pagination
      style="float:right;margin-top: 2px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageData.pageNum"
      :total="total"
      :page-sizes="[5, 10, 15]"
      :page-size="pageData.pageSize"
      layout="total,prev, pager, next,sizes, jumper">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'proTable',
    props: {
      tableData: Array
    },
    data () {
      return {
        pageData: {
          pageNum: 1,
          pageSize: 10
        },
        total: 0,
        tableDataShow: []
      }
    },
    methods: {
    // 列表显示条数更改
    handleSizeChange (val) {
      this.pageData.pageSize = val
      this.refreshForm()
    },
    // 列表页码更改
    handleCurrentChange (val) {
      this.pageData.pageNum = val
      this.refreshForm()
    },
    // 刷新列表
    refreshForm () {
      var pageData = this.pageData
      this.tableDataShow = []
      this.total = this.tableData.length
      for (let i = (pageData.pageNum - 1) * pageData.pageSize; i < this.total && i < pageData.pageNum * pageData.pageSize; i++) {
        this.tableDataShow.push(this.tableData[i])
      }
    },
    }
  }
</script>
