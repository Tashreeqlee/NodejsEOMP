import {connection as db} from '../config/index.js'
class Products{
    fetchProducts(req, res){
        const qry =`
        SELECT prodID, prodName, quantity,
        amount, category, prodUrl
        FROM Products;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const qry =`
        SELECT prodID, prodName, quantity,
        amount, category, prodUrl
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result[0],
            })
        })
    }
    addProduct(req, res){
        const qry = `
        INSERT INTO Products
        SET ?;
        `
        db.query(qry, [req.body], (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'New product was added'
            })
        })
    }
    // deleting products
    deleteProduct(req, res) {
        const query = `
            DELETE FROM Products WHERE prodID = ${req.params.id}
        `;
    
        db.query(query, [req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "product record was deleted successfully",
          });
        });
      }
      //Updating products
      updateProduct(req, res){
        const query = `
            UPDATE Products SET ? WHERE prodID = ${req.params.id}
        `
        db.query(query, [req.body, req.params.id], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product updated successfully"
            })
        })
    }
}
export{
    Products
}